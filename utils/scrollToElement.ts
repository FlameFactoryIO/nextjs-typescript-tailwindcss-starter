const scrollToElement = (id) => {
  if (!id) return;
  const el = document.getElementById(id);
  if (el) {
    setTimeout(() => {
      el.scrollIntoView();
    }, 10);
  }
};

export default scrollToElement;
