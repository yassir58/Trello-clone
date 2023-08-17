// The below import defines which components come from formik
import React, {useEffect} from "react";
import { FormControl, FormErrorMessage, FormHelperText, Input } from "@chakra-ui/react";
import { z } from "zod";

interface ControlledFormProps {
  action: any;
  onClose?: () => void;
  handleOnchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;

}

export const ControlledForm: React.FC<ControlledFormProps> = ({
  action,
  onClose,
  handleOnchange,
  value,
  placeholder,
}) => {
  const inputValidator = z.string().min(5);
  const isError = inputValidator.safeParse(value);
  const inputRef = React.useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef?.current?.focus();
  }, [])
  return (
    <form
      onSubmit={() => {
        action();
        onClose && onClose();
      }}
    >
      <FormControl isInvalid={!isError?.success}>
        <Input variant="outline" placeholder={placeholder} ref={inputRef} w="98%" my='10px' mr='8px' onChange={handleOnchange} px={2} />
        {!value.length ? (
          <FormHelperText>input required</FormHelperText>
        ) : (
          isError && isError.success === false && <FormErrorMessage>invalid input</FormErrorMessage>
        )}
      </FormControl>
    </form>
  );
};
