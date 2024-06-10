import {UiFieldLabel} from "./ui-field-label";
import {UiFieldSelect} from "./ui-field-select";
import {UiFieldMessage} from "./ui-field-message";

export function UiSelectField({
                                label,
                                required,
                                helperText,
                                errorText,
                                className,
                                options
                              }) {
  return (
    <div className={className}>
      <UiFieldLabel label={label} required={required} />
      <UiFieldSelect options={options}/>
      <UiFieldMessage helperText={helperText} errorText={errorText}/>
    </div>
  );
}
