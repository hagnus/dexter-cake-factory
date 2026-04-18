import { LucideIcon } from 'lucide-react';
import { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
  helperText?: string;
}

export function InputField({
  label,
  icon: Icon,
  helperText,
  ...props
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={props.id} className="text-sm font-medium text-slate-900">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
        <input
          className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
          {...props}
        />
      </div>
      {helperText && (
        <p className="text-xs text-slate-500">{helperText}</p>
      )}
    </div>
  );
}
