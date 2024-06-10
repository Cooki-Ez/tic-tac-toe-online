import clsx from "clsx";

/**
 * @param {{
 *   label: string,
 *   required
 * }}
 * @returns {JSX.Element|null}
 */

export function UiFieldLabel({label, required}) {
  return (
    <label htmlFor="example2"
           className={clsx(
             required && "after:ml-0.5 after:text-orange-600 after:content-['*']",
             "mb-1 block text-sm font-medium text-slate-900",
           )}
    >
      {label}
    </label>
  );
}
