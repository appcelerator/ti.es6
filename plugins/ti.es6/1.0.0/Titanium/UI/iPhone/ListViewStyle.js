export default class ListViewStyle {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iPhone.ListViewStyle')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iPhone.ListViewStyle.apiName;
	}
	static get GROUPED () {
		return Titanium.UI.iPhone.ListViewStyle.GROUPED;
	}
	static get PLAIN () {
		return Titanium.UI.iPhone.ListViewStyle.PLAIN;
	}

	// properties
	get apiName () {
		return this._object.apiName;
	}
	get GROUPED () {
		return this._object.GROUPED;
	}
	get PLAIN () {
		return this._object.PLAIN;
	}

	// methods
	getApiName () {
		return this._object.getApiName();
	}
};
Object.freeze(ListViewStyle);

function normalize (object) {
	if (typeof object === 'object') {
		if (object._object) {
			return object._object;
		}

		for (let key in object) {
			if (typeof object[key] === 'object') {
				if (object[key]._object) {
					object[key] = object[key]._object;
				}
			}
		}
	}

	return object;
}