import { createElement } from "lwc";
import WireServiceJest from "c/wireServiceJest";
import { getRecord } from "lightning/uiRecordApi";
import { registerLdsTestWireAdapter } from "@salesforce/sfdx-lwc-jest";

const mockGetRecord = require("./data/fetchAccount.json");
const getRecordAdapter = registerLdsTestWireAdapter(getRecord);

describe("c-wire-service-jest", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  test("TODO: check if displays name, phone and indstry", () => {
    const element = createElement("c-wire-service-jest", {
      is: WireServiceJest
    });
    document.body.appendChild(element);

    getRecordAdapter.emit(mockGetRecord);

    return Promise.resolve().then(() => {
      const name = element.shadowRoot.querySelector(".name");
      const phone = element.shadowRoot.querySelector(".phone");
      const industry = element.shadowRoot.querySelector(".industry");

      const nameField = mockGetRecord.fields.Name.value;
      const indField = mockGetRecord.fields.Industry.value;
      const phoneField = mockGetRecord.fields.Phone.value;

      expect(name.textContent).toBe(nameField);
      expect(industry.textContent).toBe(indField);
      expect(phone.textContent).toBe(phoneField);
    });
  });
});
