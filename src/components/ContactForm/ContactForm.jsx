import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import css from './ContactForm.module.css';
import { addContact } from '../../redux/contactsOperations';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    name: yup.string().min(4).max(15).required(),
    number: yup.string().min(5).max(18).required(),
  })
  .required();

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { items } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const onSubmit = data => {
    if (
      items.find(({ name }) => name.toLowerCase() === data.name.toLowerCase())
    ) {
      alert(`${data.name} is already in contacts`);
      reset();
      return;
    }

    dispatch(addContact(data));

    reset();
  };

  return (
    <div>
      <form className={css.contactForm} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Contact name</span>
          <input
            className={css.contactInput}
            type="text"
            placeholder="Contact's name"
            {...register('name', { required: true })}
          />
          <span>{errors.name?.message}</span>
        </label>
        <label>
          <span>Number</span>
          <input
            className={css.contactInput}
            type="text"
            placeholder="Contact's number"
            {...register('number')}
          />
          <span>{errors.number?.message}</span>
        </label>
        <button className={css.formButton} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
