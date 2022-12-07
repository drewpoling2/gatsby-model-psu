/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { useState } from 'react';
import { Button } from '../Button/Button';
export const Form = ({ fieldTextOne, fieldTextTwo, fieldTextThree }) => {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [inputThree, setInputThree] = useState('');

  const handleChangeOne = (e) => {
    setInputOne(e.target.value);
  };
  const handleChangeTwo = (e) => {
    setInputTwo(e.target.value);
  };
  const handleChangeThree = (e) => {
    setInputThree(e.target.value);
  };
  const handleSubmit = (e) => {
    if (inputOne !== '' && inputTwo !== '' && inputThree !== '') {
      alert(
        `Thank you ${inputOne}, for reaching out! We'll get back to you as soon as possible `
      );
      setInputOne('');
      setInputTwo('');
      setInputThree('');
      e.preventDefault();
    } else {
      alert(`Please fill out all fields before submitting`);
    }
  };
  return (
    <div className="flex-col">
      <div className="flex w-full">
        <form
          onSubmit={handleSubmit}
          sx={{
            width: '50%',
            '@media screen and (max-width: 64em)': {
              mx: 4,
              width: '75%',
            },
          }}
        >
          <div className="flex-col">
            <input
              sx={{
                p: 16,
                fontSize: 'm',
                mb: 2,
              }}
              placeholder={fieldTextOne}
              type="text"
              value={inputOne}
              onChange={handleChangeOne}
            />
            <input
              sx={{ p: 16, fontSize: 'm', mb: 2 }}
              placeholder={fieldTextTwo}
              type="text"
              value={inputTwo}
              onChange={handleChangeTwo}
            />
            <input
              sx={{
                p: 16,
                fontSize: 'm',
                mb: 2,
              }}
              placeholder={fieldTextThree}
              type="text"
              value={inputThree}
              onChange={handleChangeThree}
            />
          </div>
          <Button type="submit" text="Submit" onClick={handleSubmit}></Button>
        </form>
      </div>
    </div>
  );
};
