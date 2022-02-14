import { createElement } from "lwc";
import UsingJestFirst from "c/usingJestFirst";
const SHOW_TOAST_EVT = "lightning__showtoast";
describe("c-using-jest-first", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  test("TODO: check if paragraph is properly inserted", () => {
    const element = createElement("c-using-jest-first", {
      is: UsingJestFirst
    });
    document.body.appendChild(element);
    const para = element.shadowRoot.querySelector(".paragraph"); //this.template
    const content = para.textContent;
    expect(content).toBe("First JEST Testing");
  });

  test("TODO: check if the toast is fired", () => {
    const element = createElement("c-using-jest-first", {
      is: UsingJestFirst
    });
    document.body.appendChild(element);

    //create Mock for handler
    const showToastHandler = jest.fn();

    element.addEventListener(SHOW_TOAST_EVT, showToastHandler);

    return Promise.resolve()
      .then(() => {
        const showButton = element.shadowRoot.querySelector(".toast-btn");
        showButton.click();
      })
      .then(() => {
        expect(showToastHandler).toBeCalledTimes(1);
      });
  });

  test("TODO: check if the paragraph is changed onclick", () => {
    const element = createElement("c-using-jest-first", {
      is: UsingJestFirst
    });
    document.body.appendChild(element);

    const para = element.shadowRoot.querySelector(".paragraph");

    const textChangeHandler = jest.fn();

    element.addEventListener("click", textChangeHandler);

    return Promise.resolve()
      .then(() => {
        const changeBtn = element.shadowRoot.querySelector(".text-btn");
        changeBtn.click();
      })
      .then(() => {
        expect(para.textContent).toBe("Changed Paragraph");
      });
  });
});
