import IHttpBuilder from "./builder";
import Http from "./http";

export default class HttpBuilder implements IHttpBuilder {
	private http: Http;

	constructor() {
		this.http = new Http();
	}
	setUrl(url: string): Http {
		this.http.url = url;
		return this.http;
	}
	setHeader(headerOpts: { key: string }): Http {
		this.http.headers = [];
		this.http.headers.push(headerOpts);
		return this.http;
	}
	setBody(bodyOpts: {}): Http {
		this.http.bodyOpts = bodyOpts;
		return this.http;
	}
	setMethod(method: "GET" | "POST" | "PUT" | "DELETE"): Http {
		this.http.method = method;
		return this.http;
	}
	getResult() {
		const product = this.http;
		this.http = new Http();
		return product;
	}
}
