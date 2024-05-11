import Link from 'next/link';




export function MenuItems( {className}: {className?: string} ) {

  const menuItems = [
    { label: 'Home', url: '/' },
    // { label: 'Wish List', url: '/wish' }
  ]

  return (

    <ul className={className}>

      { menuItems.map( (item, idx) => (
        <li key={idx}>
          <Link href={item.url}> { item.label } </Link>
        </li>
      ))}

    </ul>

  )
}