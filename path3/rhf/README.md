RHF(React Hook Form)은 <form>안에서 유효성 검사를 보다 쉽게 사용하기 위한 라이브러리에요!

RHF의 장점은 아래와 같습니다.

1. 불필요한 랜더링 없이 유효성 검사를 실시간으로 진행이 가능합니다.
2. 유효성 검사를 위해 하나 하나 정규표현식과 코드를 작성하지 않아도 괜찮아요!

- 아래와 같이 사용해볼 수 있어요 :)

const {register, handleSubmit, formState: {errors} } = useFrom()

{error가 발생하면 errors에 register로 등록된 이름의 key값으로 담겨요!}
{watch는 사용시 리랜더가 반복됩니다. 되도록 사용하지 않도록 해봐요!}
{submit에는 반드시 handleSubmit을 사용해야해요}
{register에 option으로 다양한 유효성 검사 식을 넣을 수 있어요!}

<form onSubmt={handleSubmit(onsumbitFunc)}>
		<input placeholder="email" {...register("email", { required: true })} />
</form>

YUP은 RHF와 자주 사용하는 라이브러리이긴 하지만 정확히 말하면 어떠한 데이터의 스키마(제약조건)
을 확인하기 위하 라이브러리에요! 경우에 따라선 타입스크립트 대신 사용할 수도 있습니다.

const schema = yup.object().shape({
email: yup
.string()
.email("이메일 양식이 올바르지 않습니다")
.required("이메일을 입력해주세요"),
password: yup
.string()
.min(8, "8글자 이상 입력해주세요")
.required("비밀번호를 입력해주세요"),
});

// emil 양식으로 인한 validation 에러가 발생합니다.
const user = await schema.validate({
email: "안녕하세요",
password "12345678"
})

- 아래와 같이 같이 쓸 수 있어요!

import { yupResolver } from '@hookform/resolvers/yup'
{꼭 설치해주셔야 합니다!}

const {register, handleSubmit, formState: {isValid, errors}} = useForm({
mode: 'onChange',
resolver: yupResolver(schema)
})

<>
<form onSubmit={handleSubmit(onSubmit)}>
<h1>로그인</h1>
<input placeholder="email" {...register("email")}/>
{errors.email && <p>{errors.email.message}</p>}

      <input placeholder="password" type="password" {...register("password")}/>
      {errors.password && <p>{errors.password.message}</p>}

      <button disabled={!isValid}>로그인</button>
    </form>

</>
