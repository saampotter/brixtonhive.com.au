import { useState } from 'react';
import Button from '../components/Button';
import { Input } from '../components/Input';
import Container from '../components/Container';
import { submitForm } from '../utils/submitForm';
import ContentContainer from '../components/ContentContainer';

export default function GetAQuoteContainer() {
  const [state, setState] = useState({ status: 'idle', name: '' });

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      setState(s => ({ status: 'submitting', ...s }));

      const body = {
        name: event.target.name.value,
        email: event.target.email.value,
        contact_number: event.target.contact_number.value,
        storage_period: event.target.storage_period.value,
        estimated_space: event.target.estimated_space.value,
      };

      await submitForm(body);

      try {
        let [name] = body.name.includes(' ') ? body.name.split(' ') : [body.name];
        let [s, ...rest] = name.split('');
        name = s.toUpperCase() + rest.join('');
        setState({ status: 'submitted', name });
      } catch {
        setState(s => ({ status: 'submitted', ...s }));
      }
    } catch (err) {
      setState(s => ({ status: 'idle', ...s }));
    }
  };

  return (
    <Container className="bg-c-brown-500">
      <ContentContainer>
        <div className="flex flex-col items-center w-full space-y-16">
          {state.status === 'idle' && (
            <Form isSubmitting={state.status === 'submitting'} onSubmit={handleSubmit} />
          )}
          {state.status === 'submitted' && <Success name={state.name} />}
        </div>
      </ContentContainer>
    </Container>
  );
}

const Form = ({ isSubmitting, onSubmit }) => (
  <>
    <p className="text-3xl font-medium text-center text-white lg:text-6xl">Get a quote</p>

    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center w-full max-w-md mx-auto space-y-6"
    >
      <Input label="Name" id="name" name="name" autoComplete="given-name" type="text" />
      <Input id="email" name="email" type="email" autoComplete="email" label="Email address" />
      <Input
        type="tel"
        id="contact_number"
        name="contact_number"
        label="Contact number"
        autoComplete="mobile-number"
      />
      <Input
        type="text"
        label="Storage period"
        id="storage_period"
        name="storage_period"
        placeholder="E.g. 18 months"
      />
      <Input
        type="text"
        id="estimated_space"
        name="estimated_space"
        label="Estimated space required (m)"
        placeholder="E.g. 4x3"
      />

      <Button type="submit">{isSubmitting ? 'Submitting...' : 'Submit'}</Button>
    </form>
  </>
);

const Success = ({ name }) => (
  <>
    <p className="text-3xl font-medium text-center text-white lg:text-6xl">
      Thanks for submitting{name && ` ${name}`}
    </p>

    <p className="text-xl text-center text-c-brown-900">
      We'll be in touch as soon as possible with a quote. <br />
      Enjoy your day.
    </p>
  </>
);
