// Mock for isolated-vm in test environment
// The tests don't actually use the isolate functionality

export class Isolate {
  createContextSync() {
    return {
      global: {
        setSync: () => {},
        derefInto: () => ({}),
      },
      evalClosureSync: () => {},
    };
  }
  dispose() {
    // Mock implementation
  }
}
