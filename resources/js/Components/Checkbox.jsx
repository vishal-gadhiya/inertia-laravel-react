export default function Checkbox({ name, value, handleChange, defaultChecked }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
            onChange={(e) => handleChange(e)}
            defaultChecked={defaultChecked}
        />
    );
}
