import { type CmsComponent } from "@remkoj/optimizely-cms-react"
import { type ComponentElementDataFragment, ComponentElementDataFragmentDoc } from "@/gql/graphql"

import { CmsContent, CmsEditable, getServerContext } from '@remkoj/optimizely-cms-react/rsc'
import createClient from "@remkoj/optimizely-graph-client";
import { getContentById } from '@/gql/functions'

export const ComponentElement: CmsComponent<ComponentElementDataFragment> = async ({ data }) => {
    const context = getServerContext();
    const { inEditMode, factory } = context;
    const gqlClient = context.client ?? createClient();
    const content = data.Content as any;
    if (content && content.key) {
        const data = await getContentById(gqlClient, { key: content.key });
        const items = data.content?.items as any;
        const contentLink = { ...items[0] }
        const fragmentData = contentLink;
        const contentType = items[0]._metadata.types;
        const block = await CmsContent({ contentLink, contentType, fragmentData, client: gqlClient, factory, outputEditorWarning: inEditMode, contentTypePrefix: "Component" });
        return (
            <CmsEditable as="div" className="text-5xl">
                <CmsEditable as="div" className='component' cmsId={content.key}>
                    {block}
                </CmsEditable>
            </CmsEditable>
        );
    }
    return (
        <CmsEditable as="div" className="text-5xl"></CmsEditable>
    );
}
ComponentElement.getDataFragment = () => ['ComponentElementData', ComponentElementDataFragmentDoc]

export default ComponentElement