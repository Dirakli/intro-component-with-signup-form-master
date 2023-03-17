import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function Form() {
    const [useInfro, setUserInfo] = useState<any>();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<any>();

    function onsubmit(data: any) {
        console.log(data)
        setUserInfo(data)
        reset()
    }

    return (
        <FormWrapper onSubmit={handleSubmit(onsubmit)} >
            <>
                <Input style={{ borderColor: errors.firstName ? "rgba(255, 121, 121, 1)" : "#DEDEDE" }} type="text" placeholder="First Name" {...register("firstName", {
                    pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "Wrong format, letters only",
                    },
                    required: {
                        value: true,
                        message: "First Name cannot be empty",
                    },
                }
                )} />
                <ErrorMessage>{errors.firstName && errors.firstName.message}</ErrorMessage>
                <Input style={{ borderColor: errors.firstName ? "rgba(255, 121, 121, 1)" : "#DEDEDE" }} type="text" placeholder="Last Name" {...register("lastName")} {...register("lastName", {
                    pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "Wrong format, letters only",
                    },
                    required: {
                        value: true,
                        message: "Last Name cannot be empty",
                    },
                }
                )} />
                <ErrorMessage>{errors.lastName && errors.lastName.message}</ErrorMessage>
                <Input style={{ borderColor: errors.firstName ? "rgba(255, 121, 121, 1)" : "#DEDEDE" }} type="email" placeholder="Email Address" {...register("email")} {...register("email", {
                    pattern: {
                        value: /^[^@]+@[^@]+\.[a-zA-Z]{1,}$/,
                        message: "must be uppercase, lowercase and numbers",
                    },
                    required: {
                        value: true,
                        message: "email cannot be empty",
                    },
                }
                )} />
                <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>
                <Input style={{ borderColor: errors.firstName ? "rgba(255, 121, 121, 1)" : "#DEDEDE" }} type="password" placeholder="Password" {...register("password")} {...register("password", {
                    pattern: {
                        value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,12}$/,
                        message: "at least 8 to 12; must be uppercase lowercase and numbers",
                    },
                    required: {
                        value: true,
                        message: "password cannot be empty",
                    },
                }
                )}
                />
                <ErrorMessage>{errors.password && errors.password.message}</ErrorMessage>
                <Button type="submit" >CLAIM YOUR FREE TRIAL</Button>
                <TermsAndServices>By clicking the button, you are agreeing to our <Span>Terms and Services</Span></TermsAndServices>
            </>
        </FormWrapper>
    )
}

const ErrorMessage = styled.p`
  font-family: 'Poppins';
  width: 279px;
  cursor: pointer;
  display: flex;
  justify-content: end;
  font-size: 11px;
  font-style: italic;
  font-weight: 500;
  color: rgba(255, 121, 121, 1);
  line-height: 16.5px;

  @media (min-width: 1200px) {
    width: 460px;
  }
`

const Span = styled.span`
  font-family: 'Poppins';
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  color: rgba(255, 121, 121, 1);
  line-height: 21px;
  text-align: center;
`

const TermsAndServices = styled.p`
  font-family: 'Poppins';
  font-size: 11px;
  font-weight: 500;
  color: #BAB7D4;
  line-height: 21px;
  text-align: center;
  padding-left: 39px;
  padding-right: 39px;
`

const Button = styled.button`
  width: 279px;
  height: 56px;
  font-family: 'Poppins';
  font-size: 15px;
  font-weight: 600;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  line-height: 26px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  background: #38CC8B;
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);

  @media (min-width: 1200px) {
    width: 460px;
  }
`

const Input = styled.input`
  width: 279px;
  height: 56px;
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: rgba(61, 59, 72, 1);
  border-radius: 5px;
  opacity: 0.75;
  padding-left: 20px;
  background: #FFFFFF;
  border: 1px solid #DEDEDE;
  :focus {
    outline: none;
    opacity: 1;
    border: 1px solid rgba(94, 84, 164, 1);
  }

  @media (min-width: 1200px) {
    width: 460px;
    height: 56px;
    padding-left: 32px;
  }
`

const FormWrapper = styled.form`
  width: 327px;
  height: 442px;
  margin-top: 24px;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  align-items: center;
  border-radius: 10px;
  justify-content: space-around;

  @media (min-width: 1200px) {
    width: 540px;
    height: 474px;
    
  }
`

export default Form;