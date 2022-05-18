export default function TextField({label, field, type, placeholder}) {
  return (
    <div className="custom-form-floating">
      <input
        type={type}
        name={field}
        id={field}
        className="custom-form-control"
        placeholder={placeholder}
      />
      <label>{label}</label>
    </div>
  )
}
