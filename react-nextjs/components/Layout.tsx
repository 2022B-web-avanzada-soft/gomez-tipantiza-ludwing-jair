import React, {ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({children, title = 'This is the default title'}: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
                  crossOrigin="anonymous"></link>
        </Head>
        <header>
            <nav>
                <Link href="/">HOME / CASA</Link> |
                <Link href="/about">About</Link> |{' '}
                <Link href="/users">Users List</Link> |{' '}
                <a href="/a_hola_mundo">Hola mundo</a> |{' '}
                <a href="/c_use_state">Use state</a> |{' '}
                <a href="/d_hook_custom">HOOK CUSTOM</a> |{' '}
                <a href="/e_use_context">USE CONTEXT</a> |{' '}
                <a href="/f_ejemplo_criptomonedas">Criptomonedas</a> |{' '}
                <a href="/api/users">Users API</a> |{' '}

            </nav>
        </header>
        {children}
        <footer>
            <hr/>
            <span>I'm here to stay (Footer)</span>
        </footer>
    </div>
)

export default Layout