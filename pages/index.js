import Layout from '../components/Layout.js'

export async function getStaticProps(context) {
     
        const poke = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
        const { results } = await poke.json()
        const pokemon = results.map((result, index) => {
            const ModIndex = ("00" + (index + 1))
            const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ModIndex}.png`
            return {
                ...result, image
            }
        })
     return {
        props: { pokemon }
    }



}





export default function Home({ pokemon }) {
    console.log(pokemon)
    return (
        <div>
            <Layout title="Pokedex">
                <h1 className="text-4xl mb-8 text-center">hey</h1>
            </Layout>
        </div>
    )
}





