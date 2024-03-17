import Combobox from "hw_combobox/models/combobox/base"
import { cancel } from "hw_combobox/helpers"

Combobox.Navigation = Base => class extends Base {
  navigate(event) {
    if (this._autocompletesList) {
      this._navigationKeyHandlers[event.key]?.call(this, event)
    }
  }

  _navigationKeyHandlers = {
    ArrowUp: (event) => {
      this._selectIndex(this._selectedOptionIndex - 1)
      cancel(event)
    },
    ArrowDown: (event) => {
      this._selectIndex(this._selectedOptionIndex + 1)
      cancel(event)
    },
    Home: (event) => {
      this._selectIndex(0)
      cancel(event)
    },
    End: (event) => {
      this._selectIndex(this._visibleOptionElements.length - 1)
      cancel(event)
    },
    Enter: (event) => {
      this._closeAndBlur()
      cancel(event)
    },
    Escape: (event) => {
      this._closeAndBlur()
      cancel(event)
    },
    Backspace: (event) => {
      if (this._isMultiselect && !this._fullQuery) {
        this._focusLastChipDismisser()
        cancel(event)
      }
    }
  }
}
