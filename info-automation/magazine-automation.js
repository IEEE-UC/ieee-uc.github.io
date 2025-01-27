import { BaseAutomation } from "./base-automation.js";

class MagazineAutomation extends BaseAutomation {
	createChildElement(jsonVal) {
		const childElement = document.createElement("div");
		const linkElement = document.createElement("a");
		linkElement.href = jsonVal.link;
		linkElement.innerText = jsonVal.link;
		childElement.textContent = jsonVal.year;
		return childElement;
	}
}
