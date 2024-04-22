import Img1 from './assets/Logo.png'

const posts = [
    {
        id: 1,
        title: 'Introducción a las Bases de Datos: Qué son y por qué son importantes',
        href: '#',
        description:
            'Descubre los fundamentos de las bases de datos: qué son, cómo funcionan y por qué son fundamentales en el mundo digital. Esta introducción te ayudará a comprender la importancia de las bases de datos en el almacenamiento y gestión de información en sistemas informáticos.',
        date: 'Abr 21, 2024',
        datetime: '2024-04-21',
        category: { title: 'Bases de Datos', href: '#' },
        author: {
            name: 'Juan Pérez',
            role: 'Instructor de Tecnología',
            href: '#',
            imageUrl:
                {Img1}
        },
    },
    {
        id: 2,
        title: 'Principales tipos de Bases de Datos: Una visión general para principiantes',
        href: '#',
        description:
            'Explora los diferentes tipos de bases de datos, como las relacionales, NoSQL y de grafos, y comprende las características distintivas de cada una. Esta guía te ayudará a entender las opciones disponibles y a elegir la más adecuada para tus necesidades.',
        date: 'Abr 21, 2024',
        datetime: '2024-04-21',
        category: { title: 'Bases de Datos', href: '#' },
        author: {
            name: 'María García',
            role: 'Analista de Datos',
            href: '#',
            imageUrl:
                {Img1}
        },
    },
]

export default function News() {
    return (

        <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl">Noticias y Consejos</h2>
                    <p className="mt-2 text-lg leading-8 text-white">
                        Aprende a usar la plataforma y  tips sobre como administrar tu negocio.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-blue-700 group-hover:text-gray-600">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-blue-700">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}



