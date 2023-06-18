interface props {
  // id: number;
  name: string;
  type: string;
  placeholder: string;
  errorMessage?: string;
  label: string;
  pattern?: string;
  required?: boolean;
  onChange?: string;
}
export const inputs: Array<props> = [
  {
    // id: 1,
    name: 'username',
    type: 'text',
    placeholder: 'Username',
    errorMessage:
      'Tên người dùng phải có 3-16 ký tự và không được bao gồm bất kỳ ký tự đặc biệt nào',
    label: 'Username',
    pattern: '^[A-Za-z0-9]{3,16}$',
    required: true,
  },
  {
    // id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'Địa chỉ email không hợp lệ',
    label: 'Email',
    required: true,
  },
  // {
  //   // id: 3,
  //   name: 'birthday',
  //   type: 'date',
  //   placeholder: 'Birthday',
  //   label: 'Birthday',
  // },
  {
    // id: 4,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    errorMessage:
      'Mật khẩu phải có 8-20 ký tự và bao gồm ít nhất 1 chữ cái, 1 số và 1 ký tự đặc biệt!',
    label: 'Password',
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  // {
  //   // id: 5,
  //   name: 'confirmPassword',
  //   type: 'password',
  //   placeholder: 'Confirm Password',
  //   errorMessage: "Passwords không trùng khớp!",
  //   label: 'Confirm Password',
  //   // pattern: values.password,
  //   pattern: '',
  //   required: true,
  // },
];
