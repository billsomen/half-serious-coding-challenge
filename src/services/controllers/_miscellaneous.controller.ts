export class BaseController {
  protected resource: string

  constructor() {
    this.resource = ""
  }

  protected stringify(params: Record<string, string | number>): string {
    return JSON.stringify(params)
  }
}
