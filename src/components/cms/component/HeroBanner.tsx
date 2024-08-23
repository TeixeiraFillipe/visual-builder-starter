import { gql, type Schema } from '@/gql'
import { CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

/**
 * Hero Banner Component
 */
export const HeroBanner: CmsComponent<Schema.HeroBannerDataFragment> = ({ data: { Title, Subtitle } }) => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-mischka to-mischka">
            <div className="container px-4 md:px-6 text-center">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                        {Title}
                    </h1>
                    <p className="max-w-[700px] mx-auto text-lg text-muted-foreground md:text-xl">
                        {Subtitle}
                    </p>
                </div>
            </div>
        </section>
    );
}

HeroBanner.displayName = 'Hero Banner'
HeroBanner.getDataFragment = () => ['HeroBannerData', HeroBannerData]

export const HeroBannerData = gql(`
    fragment HeroBannerData on HeroBanner {
        Title
        Subtitle
    }`
)

export default HeroBanner
