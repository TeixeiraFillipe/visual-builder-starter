'use client'

export const Text = ({ text, el: Wrapper = "p", className, ...containerProps }: any) => {
  return (
    <Wrapper className={className} {...containerProps}>
      {text}
    </Wrapper>
  );
};

export default Text;