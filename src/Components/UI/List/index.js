export default function List({ title, arr }) {
    return (
        <div>
            <p>{title}</p>
            <ul>
                {!!arr && arr.map((value, index) => (
                    <li>{value.name}</li>
                ))}
            </ul>
        </div>
    )
}
