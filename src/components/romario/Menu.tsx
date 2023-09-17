import MegaMenu from '@components/ui/mega-menu';

interface MenuProp {
    classNames:string,
    orientation:string,
    menuData: MenuType[],
    fontClasses:string
}
  
interface MenuType {
    id: number,
    label: string,
    href: string,
    columns?: object
}
  
  export default function Menu({ menuData,classNames,orientation,fontClasses }: MenuProp) {
    return (
      <div className={"romario-menu-list " + classNames }>
        <nav>
            <ul className={"" + (orientation == 'horizontal') ? fontClasses + ' flex gap-5 ' : ''}>
            {menuData.map((item: MenuType) => (
                <li key={item.id}>
                  {item?.columns && Array.isArray(item.columns) && (
                    <MegaMenu columns={item.columns} />
                  )}
                    <a href={item.href} className="hover:text-black transition-color">{item.label}</a>
                </li>
            ))}
            </ul>
        </nav>
        
      </div>
    );
  }
  