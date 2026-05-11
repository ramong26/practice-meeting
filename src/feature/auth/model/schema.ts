import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email('이메일 형식이 올바르지 않습니다.'),
  password: z.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다.'),
});

export const signupSchema = z
  .object({
    name: z.string().min(1, '이름은 필수 입력입니다.'),
    email: z.email('이메일 형식이 올바르지 않습니다.'),
    password: z.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다.'),
    passwordConfirm: z
      .string()
      .min(8, '비밀번호 확인은 최소 8자 이상이어야 합니다.'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호와 비밀번호 확인이 일치하지 않습니다.',
    path: ['passwordConfirm'],
  });

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
