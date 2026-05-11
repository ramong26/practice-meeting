import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from '@tanstack/react-router';
import { EyeOffIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { type LoginFormData, loginSchema } from '@/feature/auth/model/schema';

import { postLogin } from '@/shared/api/endpoints/auth';
import { ACCESS_TOKEN_KEY } from '@/shared/constants/token';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { Field, FieldError, FieldLabel } from '@/shared/ui/field';
import { Input } from '@/shared/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/shared/ui/input-group';

export function LoginPage() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await postLogin({
        email: data.email,
        password: data.password,
      });
      localStorage.setItem(ACCESS_TOKEN_KEY, response.accessToken);
      return response;
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <section className="flex items-center justify-center">
      <Card className="w-fit p-0 rounded-4xl ring-0">
        <CardContent className="flex gap-6 flex-col py-12 px-14">
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-10">
              <CardHeader className="flex items-center justify-center">
                <CardTitle className="w-fit text-2xl font-bold">
                  로그인
                </CardTitle>
              </CardHeader>
              <div className="flex flex-col gap-4">
                <Field>
                  <FieldLabel htmlFor="id-email" className="gap-0.5">
                    아이디 <span className="text-green-scale-600">*</span>
                  </FieldLabel>

                  <Input
                    {...register('email')}
                    required
                    id="id-email"
                    type="email"
                    className="bg-gray-scale-50 p-3 h-fit min-w-114"
                    placeholder="이메일을 입력해주세요"
                  />
                  <FieldError errors={errors?.email?.message}></FieldError>
                </Field>

                <Field>
                  <FieldLabel htmlFor="password" className="gap-0.5">
                    비밀번호 <span className="text-green-scale-600">*</span>
                  </FieldLabel>

                  <InputGroup className="bg-gray-scale-50 p-3 h-fit min-w-114">
                    <InputGroupInput
                      {...register('password')}
                      required
                      id="password"
                      type="password"
                      className="p-0 h-fit"
                      placeholder="비밀번호를 입력해주세요"
                    />
                    <InputGroupAddon
                      className="p-0 cursor-pointer"
                      align="inline-end">
                      <EyeOffIcon size={24} />
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldError errors={errors?.password?.message}></FieldError>
                </Field>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <Button
                variant="secondary"
                className="w-full py-3.25 h-fit text-xl font-semibold bg-gray-scale-100 text-gradient-scale-600"
                type="submit"
                disabled={isSubmitting}>
                로그인
              </Button>
              <LoginPageFooter />
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

function LoginPageFooter() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <hr className="text-gray-scale-300 flex-1"></hr>
          <span className="font-medium text-gray-scale-500">
            SNS 계정으로 로그인
          </span>
          <hr className="text-gray-scale-300 flex-1"></hr>
        </div>
        <div className="flex w-full gap-3">
          <button
            type="button"
            className="cursor-pointer flex gap-3 py-3 px-6.5 bg-white rounded-xl border border-gray-scale-200 w-full items-center justify-around">
            <img src="../../../../public/google.svg" alt="Google" />
            <span className="text-base font-semibold text-gray-scale-800">
              구글로 계속하기
            </span>
          </button>
          <button
            type="button"
            className="cursor-pointer flex gap-3 py-3 px-6.5 bg-[#FFEE01] rounded-xl  w-full items-center justify-around">
            <img src="../../../../public/kakao.svg" alt="Kakao" />
            <span className="text-base font-semibold text-gray-scale-800">
              카카오로 계속하기
            </span>
          </button>
        </div>
      </div>
      <div className="font-medium flex items-center justify-center gap-1 text-center">
        <span className="text-gray-scale-800">같이달램이 처음이신가요?</span>
        <Link
          to="/signup"
          className="text-green-scale-600 underline cursor-pointer">
          회원가입
        </Link>
      </div>
    </>
  );
}
