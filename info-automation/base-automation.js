async function fetchInfo() {
	try {
		const response = await fetch("info.json");

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching or parsing the info.json file:", error);
		throw error;
	}
}

const info = await fetchInfo();

class BaseAutomation {
	constructor(parentElement, infoType) {
		const infoTypeVal = info[infoType];

		if (Array.isArray(infoTypeVal)) {
			infoTypeVal.forEach((element) => {
				parentElement.appendChild(this.createChildElement(element));
			});
		} else {
			parentElement.appendChild(this.createChildElement(infoTypeVal));
		}
	}

	createChildElement(jsonVal) {
		const childElement = document.createElement("div");
		childElement.textContent = jsonVal;
		return childElement;
	}
}

export { BaseAutomation };
