import { useEffect, useState } from "react";

export function useTypingEffect(words, { typeSpeed = 100, deleteSpeed = 50, delay = 1500 } = {}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      }, isDeleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delay]);

  return text;
}
