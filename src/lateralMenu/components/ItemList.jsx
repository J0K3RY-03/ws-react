import Link from 'next/link';

const ItemList = () => {
    return (
        <>
            <li>
                <Link href="/">All</Link>
            </li>
            <li>
                <Link href="/components">Components</Link>
            </li>
            <li>
                <Link href="/hooks">Hooks</Link>
            </li>
            <li>
                <Link href="/state-manager">State-Manager</Link>
            </li>
            <li>
                <Link href="/server">Server</Link>
            </li>
            <li>
                <Link href="/patterns">Patterns</Link>
            </li>
        </>
    )
}

export default ItemList;