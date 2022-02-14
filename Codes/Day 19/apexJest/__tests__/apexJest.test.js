import { createElement } from "lwc";
import ApexJest from "c/apexJest";
import getAccount from "@salesforce/apex/AccountController.getAccount";
import { registerApexTestWireAdapter } from "@salesforce/sfdx-lwc-jest";

const mockGetRecord = require("./data/fetchAccount.json");
const getAccountApexAdapter = registerApexTestWireAdapter(getAccount);

describe("c-apex-jest", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  test("TODO: check if proper data from apex is displayed", () => {
    const element = createElement("c-apex-jest", {
      is: ApexJest
    });
    document.body.appendChild(element);

    getAccountApexAdapter.emit(mockGetRecord);

    return Promise.resolve().then(() => {
      const content = element.shadowRoot.querySelectorAll("p");

      const nameField = mockGetRecord.Name;
      const industryField = mockGetRecord.Industry;

      const expectedData = [nameField, industryField];

      content.forEach((el, idx) => {
        const actualContent = el.textContent;
        expect(actualContent).toBe(expectedData[idx]);
      });
    });
  });
});
