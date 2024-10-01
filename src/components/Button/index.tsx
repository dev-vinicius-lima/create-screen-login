/*************  ✨ Codeium Command 🌟  *************/
import { Button } from "@chakra-ui/react";

const index = ({
  children,
  ...props
}: {
  children: string;
  [key: string]: any;
}) => {
  return (
    <>
      <Button
        {...props}
        colorScheme="purple"
        size="md"
        width="100%"
        marginTop="45px"
      >
        {children}
      </Button>
    </>
  );
};

export default index;
