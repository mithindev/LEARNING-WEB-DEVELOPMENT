(function() {
  'use strict';

  class Stack {
    constructor() {
      this.undoStack = [];
      this.redoStack = [];
    }

    push(value) {
      this.undoStack.push(value);
      this.redoStack = []; // Clear redo stack after a new action
    }

    pop() {
      if (this.undoStack.length > 0) {
        const value = this.undoStack.pop();
        return value;
      } else {
        console.log('Undo stack is empty');
        return null;
      }
    }

    undo() {
      const value = this.pop();
      if (value !== null) {
        this.redoStack.push(value);
        return value;
      }
      return null;
    }

    redo() {
      const value = this.redoStack.pop();
      if (value !== null) {
        this.undoStack.push(value);
        return value;
      }
      return null;
    }

    canUndo() {
      return this.undoStack.length > 0;
    }

    canRedo() {
      return this.redoStack.length > 0;
    }
  }

  const stack = new Stack();
  const editor = document.getElementById('editor');
  const pushButton = document.getElementById('pushButton');
  const popButton = document.getElementById('popButton');
  const undoButton = document.getElementById('undoButton');
  const redoButton = document.getElementById('redoButton');

  function updateButtonStates() {
    undoButton.disabled = !stack.canUndo();
    redoButton.disabled = !stack.canRedo();
  }

  if (editor && pushButton && popButton && undoButton && redoButton) {
    pushButton.addEventListener('click', () => {
      stack.push(editor.value);
      updateButtonStates();
    });

    popButton.addEventListener('click', () => {
      const value = stack.pop();
      if (value !== null) {
        editor.value = value;
      }
      updateButtonStates();
    });

    undoButton.addEventListener('click', () => {
      const value = stack.undo();
      if (value !== null) {
        editor.value = value;
        console.log('Undo');
      }
      updateButtonStates();
    });

    redoButton.addEventListener('click', () => {
      const value = stack.redo();
      if (value !== null) {
        editor.value = value;
        console.log('Redo');
      }
      updateButtonStates();
    });

    updateButtonStates();
  } else {
    console.error('Required elements not found in the DOM.');
  }
})();
