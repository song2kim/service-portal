import TopicSection from 'components/TopicSection';
import Input from 'components/Input';
import tw from 'twin.macro';
import styled from 'styled-components';
import Select from 'components/Select';
import LinkText from 'components/LinkText';
import Customers from 'components/Customers';
import { useForm } from 'react-hook-form';
import React from 'react';
import ROUTE from 'constants/route';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const StyledLayout = styled.section`
  ${tw`bg-gray-100`};
  overflow: hidden;
  .inner {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    max-width: 1120px;
    margin: 0 auto;
  }
`;

const StyledForm = styled.form`
  ${tw`bg-white`};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  grid-column: span 8;
  padding-top: 40px;
  padding-right: 137px;
  padding-bottom: 160px;
  box-shadow: 12px 8px 14px 4px rgba(213, 213, 213, 0.35);
  &:after {
    ${tw`bg-white`}
    content:'';
    display: inline-block;
    position: absolute;
    top: 0;
    left: -50vw;
    width: 50vw;
    height: 100%;
  }
`;

const StyledTextarea = styled.div`
    width: 100%;
    .textarea-box {
        width: 100%;
        &__label {
            ${tw`text-lg`};
            display: inline-block;
            width: 100%;
            margin-top: 16px;
        }
        &__textarea {
            ${tw`bg-gray-100 placeholder:text-gray-300 font-normal`};
            display: block;
            width: 100%;
            padding: 12px 16px;
            margin-top: 8px;
            border-radius: 2px;
            border-width: 2px;
            border-color: transparent;
            &:active,
            &:focus {
                ${tw`border-violet-400`};
                outline: unset;
            }
        }
        &__error {
          ${tw`text-violet-400 text-lg font-normal`};
          margin-top: 8px;
        }
    }
`;

const StyledCheckbox = styled.div`
  margin-top: 20px;
  .check-box {
    display: flex;
    &__label {
      ${tw`text-sm`};
    }
    &__checkbox {
      margin-top: 2px;
      margin-right: 6px;
      &:active,
      &:focus {
        ${tw`border-violet-400`};
        outline: unset;
      }
    }
    &__error {
      ${tw`text-violet-400 text-lg font-normal`};
      margin-top: 8px;
    }
  }
`;

const StyledNote = styled.p`
  ${tw`text-sm`};
  margin-top: 8px;
`;

const StyledSubmit = styled.button`{
  ${tw`bg-violet-400 text-lg text-white`};
  display: block;
  width: 345px;
  margin: 32px auto 0;
  padding: 12px 0;
  
  + .error {
    ${tw`text-violet-400 text-lg font-normal`};
    margin-top: 16px;
    text-align: center;
    width: 100%;
  }
}`;

const StyledSupportMsg = styled.div`
  ${tw`bg-gray-100`};
  grid-column: span 4;
  padding-left: 40px;
  .message {
    margin-top: 40px;
    &__title {
      ${tw`font-semibold text-3xl`};
    }
    &__description {
      ${tw`font-normal text-xl text-gray-500`};
      margin-top: 8px;
    }
  }
`;

const StyledCustomers = styled(Customers)`
  ul {
    flex-wrap: wrap;
  }
`;

const TalktoSales = () => {
    const TopicData = {
        title: 'Talk to Sales',
        description: 'Learn more about our products. Get your questions answered. We\'ll help you get started.',
    };

    const { register, handleSubmit, formState: { errors } } = useForm();

    const hasError = (obj :object) => {
        if (obj.constructor === Object
            && Object.keys(obj).length === 0) {
            return false;
        }

        return true;
    };
    const onSubmit = (data: any) => console.log(data);

    return (
        <>
            <TopicSection title={TopicData.title} description={TopicData.description} />
            <StyledLayout>
                <div className="inner">
                    <StyledForm onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            id="firstName"
                            label="First Name"
                            placeholder="First Name"
                            width="calc(50% - 6px)"
                            required
                            register={register}
                            errors={errors}
                        />
                        <Input
                            id="lastName"
                            label="Last Name"
                            placeholder="Last Name"
                            width="calc(50% - 6px)"
                            required
                            register={register}
                            errors={errors}
                        />
                        <Input
                            id="email"
                            label="Work Email"
                            placeholder="example@company.com"
                            required
                            register={register}
                            errors={errors}
                        />
                        <Input
                            id="phone"
                            label="Mobile Phone Number"
                            type="number"
                            placeholder="+1-000-000-0000"
                            required
                            register={register}
                            errors={errors}
                        />
                        <Input
                            id="company"
                            label="Company"
                            placeholder="Company Name"
                            required
                            register={register}
                            errors={errors}
                        />
                        <Input
                            id="job"
                            label="Job Title"
                            placeholder="Job Title"
                            required
                            register={register}
                            errors={errors}
                        />
                        <Select
                            id="country"
                            label="Country"
                            placeholder="Select Country"
                            required
                            options={['country1', 'country2', 'country3']}
                            register={register}
                            errors={errors}
                        />
                        <StyledTextarea>
                            <div className="textarea-box">
                                <label htmlFor="comments" className="textarea-box__label">
                                    Comments
                                    <textarea
                                        {...register('comments', {
                                            maxLength: 1000,
                                        })}
                                        id="comments"
                                        cols={30}
                                        rows={5}
                                        className="textarea-box__textarea"
                                        placeholder="Tell us more about your project, needs and timeline. (1000 bytes)"
                                    />

                                    {errors.comments
                                        && errors.comments.type === 'maxLength'
                                        && <p className="textarea-box__error"> Your input exceed maximum length</p>}

                                </label>
                            </div>
                        </StyledTextarea>
                        <StyledCheckbox>
                            <div className="check-box">
                                <label htmlFor="check-box-privacy" className="check-box__label">
                                    <input
                                        id="privacy"
                                        type="checkbox"
                                        className="check-box__checkbox"
                                        {...register('privacy', { required: true })}
                                    />
                                    {/* eslint-disable-next-line max-len */}
                                    By checking this box, I confirm that I have read, consent and agree to Megazone Cloud’s SpaceONE Privacy Policy. (required)
                                    <LinkText href="/">&nbsp; Privacy Policy</LinkText>
                                    {
                                        errors.privacy?.type === 'required'
                                        && <p className="check-box__error">This field is required.</p>
                                    }

                                </label>
                            </div>
                        </StyledCheckbox>
                        <StyledNote>
                            Non-sales related inquiries submitted through this form are not monitored and will not be responded to.
                            For other inquiries, please visit our
                            <LinkText href={ROUTE.DEMO} target="_blank">&nbsp; Technical Support&nbsp; </LinkText>
                            page.
                        </StyledNote>
                        <StyledSubmit>Submit</StyledSubmit>
                        {hasError(errors)
                            && <p className="error">Please complete all required fields.</p>}
                    </StyledForm>
                    <StyledSupportMsg>
                        <div className="message">
                            <h3 className="message__title">Get started with us</h3>
                            <p className="message__description">We provide the productivity, scalability, efficiency, and security businesses require.</p>
                        </div>
                        <div className="message">
                            <h3 className="message__title">Trusted by customers</h3>
                            <p className="message__description">We are trusted by various enterprises to run and manage their cloud infrastructure.</p>
                        </div>
                        <StyledCustomers />
                    </StyledSupportMsg>
                </div>
            </StyledLayout>
        </>
    );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default TalktoSales;
