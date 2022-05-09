import TopicSection from 'components/TopicSection';
import Input from 'components/Input';
import tw from 'twin.macro';
import styled from 'styled-components';
import Select from 'components/Select';
import LinkText from 'components/LinkText';
import Customers from 'components/Customers';

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
  grid-column: span 6;
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
  }
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
  }
}`;

const StyledSupportMsg = styled.div`
  ${tw`bg-gray-100`};
  grid-column: span 6;
  padding-left: 40px;
  .message {
    max-width: 60%;
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
    li {
      width: 150px;
    }
  }
`;

const TalktoSales = () => {
    const TopicData = {
        title: 'Talk to Sales',
        description: 'Learn more about our products. Get your questions answered. We\'ll help you get started.',
    };

    return (
        <>
            <TopicSection title={TopicData.title} description={TopicData.description} />
            <StyledLayout>
                <div className="inner">
                    <StyledForm>
                        <Input id="first-name" label="First Name" placeholder="First Name" required error />
                        <Input id="last-name" label="Last Name" placeholder="Last Name" required />
                        <Input id="phone-number" label="Phone Number" placeholder="Phone Number" required />
                        <Input id="company" label="Company" placeholder="Company" required />
                        <Select id="country" label="Country" placeholder="Select Country" required />
                        <StyledTextarea>
                            <div className="textarea-box">
                                <label htmlFor="comments" className="textarea-box__label">
                                    Comments
                                    <textarea name="comments" id="comments" cols="30" rows="5" className="textarea-box__textarea" placeholder="Tell us more about your project, needs and timeline." />
                                </label>
                            </div>
                        </StyledTextarea>
                        <StyledCheckbox>
                            <div className="check-box">
                                <input id="check-box-privacy" type="checkbox" className="check-box__checkbox" />
                                <label htmlFor="check-box-privacy" className="check-box__label">
                                    By checking this box I confirm that I have read, consent and agree to Megazone Cloud’s SpaceONE Privacy Policy. (Required)
                                    <LinkText href="/">&nbsp; Privacy Policy</LinkText>
                                </label>
                            </div>
                        </StyledCheckbox>
                        <StyledSubmit>Submit</StyledSubmit>
                        <p className="error">Field needs to be filled.</p>
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

export default TalktoSales;
