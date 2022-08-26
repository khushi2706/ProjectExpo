import "./InputField.css";
export default function InputField(props) {
  let isDisable = false;
  if (props.isDisable != null) {
    isDisable = true;
  }
  return (
    <div className="sign-in-input-field-container" style={{ marginTop: 15 }}>
      <input
      disabled={isDisable}
        type={props.type}
        className="sign-in-input-fields"
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
}
