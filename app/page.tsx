import Layout from "./layout"

type pageProps = {
    active: string
}

const pageProps = {
    active: 'index'
}

export default function Home(pageProps: pageProps) {
    return (
        <div>
            index
        </div>
    );
}
