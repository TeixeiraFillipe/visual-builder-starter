import { gql, type Schema } from '@/gql'
import { CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

/**
 * Hero Component
 */
export const HeroBlock: CmsComponent<Schema.HeroBlockDataFragment> = ({ data: { heading } }) => {
    return (
        <section>
            <h1>{heading}</h1>
        </section>
    );
}
HeroBlock.displayName = 'Hero Block'
HeroBlock.getDataFragment = () => ['HeroBlockData', HeroBlockData]

export const HeroBlockData = gql(`
    fragment HeroBlockData on HeroBlock {
        heading
    }`
)

export default HeroBlock
