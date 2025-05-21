

export default function Item( {itemObj} ) {

    let {name, quantity, category} = itemObj;

    return(
        <div className="bg-slate-900 p-2 w-100 m-4">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm">Buy {quantity} in {category}</p>
        </div>
    );
}