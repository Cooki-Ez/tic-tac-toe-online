import {UiFieldLabel} from "./ui-field-label";
import {UiFieldInput} from "./ui-field-input";
import {UiFieldMessage} from "./ui-field-message";

/**
 * @param {{
 *   label?: string,
 *   className: string,
 *   helperText?: string,
 *   errorText?: string,
 *   placeholder: string,
 * } & import('react').HTMLAttributes<HTMLInputElement>} props
 * @returns {JSX.Element}
 */

export function UiTextField({
                              label,
                              required,
                              helperText,
                              errorText,
                              className,
                              ...inputProps
                            }) {
  return (
    <div>
      <UiFieldLabel label={label} required/>
      <UiFieldInput required errorText={errorText} placeholder={inputProps.placeholder} />
      <UiFieldMessage helperText={helperText} errorText={errorText}/>
    </div>
  );
}
