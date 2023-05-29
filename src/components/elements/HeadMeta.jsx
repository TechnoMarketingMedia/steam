import Head from 'next/head'
import image2 from "/public/auto.webp"
const HeadMeta = ({metaTitle}) => {
    return ( 
        <Head>
            {/* Basic metas */}
            <meta charSet="utf-8" />
            <meta name="robots" content="noindex, follow" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content="Stream Auto Supply is a car part automotive company that find all you elusive parts." />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>Stream Auto Supply</title>
            <link rel="icon" type="image/x-icon" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/auto.webp`} />
        </Head>
     );
}
 
export default HeadMeta;