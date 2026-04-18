import { Eye, EyeOff } from 'lucide-react';
import { useState, InputHTMLAttributes } from 'react';
import { InputField } from './input-field';
import { Lock } from 'lucide-react';

interface PasswordFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  helperText?: string;
}

export function PasswordField({
  label = 'Senha',
  helperText,
  ...props
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label htmlFor={props.id} className="text-sm font-medium text-slate-900">
        {label}
      </label>
      <div className="relative">
        <Lock className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
        <input
          type={showPassword ? 'text' : 'password'}
          className="w-full pl-10 pr-10 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>
      {helperText && (
        <p className="text-xs text-slate-500">{helperText}</p>
      )}
    </div>
  );
}
