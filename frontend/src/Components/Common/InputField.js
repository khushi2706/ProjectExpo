import './InputField.css';
export default function InputField(props) {
  return (
    <div className="sign-in-input-field-container" style={{ marginTop: 15 }}>
        <input type={props.type} className="sign-in-input-fields" placeholder={props.placeholder} />
    </div>

  );
}
