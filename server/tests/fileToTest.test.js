jest.mock("../models/TodoModel");
// controllers.test.js
const handelErrors = require("../error/handelErrors");
const TodoModel = require("../models/TodoModel");
const Controller = require("../Controllers/todoController");



  // Test case for postTask controller
  describe("postTask", () => {
    it("should create a new task and return 'created'", async () => {
      // Expected task data
      const expectedTask = { title: "New Task", details: "Optional details" };
  
      // Mock TodoModel.create to return a resolved promise with expected task data
      TodoModel.create.mockResolvedValueOnce(expectedTask);
  
      // Mock request and response objects
      const req = { body: expectedTask };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
      // Execute the controller function
      await Controller.postTask(req, res);
  
      // Check if TodoModel.create was called with expected task data
      expect(TodoModel.create).toHaveBeenCalledWith(expectedTask);
      // Check if response status is 201 (Created)
      expect(res.status).toHaveBeenCalledWith(201);
      // Check if response JSON contains 'created'
      expect(res.json).toHaveBeenCalledWith("created");
    }); 
  });
 
   
    describe("getAllTasks", () => {
        it("should get all tasks", async () => {
          const req = {};
          const res = { json: jest.fn() };
          const mockTasks = [{ title: "Task 1" }, { title: "Task 2" }];
    
          TodoModel.find.mockResolvedValueOnce(mockTasks);
    
          await Controller.getAllTasks(req, res);
    
          expect(TodoModel.find).toHaveBeenCalledWith({ delete_at: null });
          expect(res.json).toHaveBeenCalledWith(mockTasks);
        });
  });

  describe("getTaskByID", () => {
    it("should get a task by ID", async () => {
      const req = { params: { id: "123" } };
      const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };
      const mockTask = { _id: "123", title: "Task 123" };

      TodoModel.findById.mockResolvedValueOnce(mockTask);

      await Controller.getTaskByID(req, res);

      expect(TodoModel.findById).toHaveBeenCalledWith("123");
      expect(res.json).toHaveBeenCalledWith(mockTask);
    });
});
  
describe('Controller Tests: updateTask', () => {
    it('should update a task', async () => {
      // Mocks
      const mockedTodoModel = TodoModel.findByIdAndUpdate.mockImplementationOnce(() => {});
  
      const req = {
        params: { id: '123' },
        body: { /* your update object */ },
      };
  
      const res = {
        status: jest.fn(), // Mock the status function
        json: jest.fn(), // Mock the json function
      };
  
      // Execute the controller function from the Controller object
      await Controller.updateTask(req, res);
  
      // Verify calls and arguments
      expect(TodoModel.findByIdAndUpdate).toHaveBeenCalledWith('123', req.body);
      expect(mockedTodoModel).toHaveBeenCalled(); // You can also check other things like arguments passed to the function
      expect(res.status).not.toHaveBeenCalled(); // Adjust this based on your error handling
      expect(res.json).toHaveBeenCalled(); // Adjust this based on your error handling
    });

    
});


describe("deleteTask", () => {
    it("should delete a task", async () => {
      const req = { params: { id: "123" } };
      const res = { json: jest.fn() };
  
      await Controller.deleteTask(req, res);
  
      // Utilisez une assertion plus précise en vérifiant si la fonction res.json est appelée avec l'objet attendu plutôt qu'une chaîne spécifique
      expect(TodoModel.findByIdAndUpdate).toHaveBeenCalledWith("123", { delete_at: expect.any(String) });
      expect(res.json).toHaveBeenCalledWith({ message: "deleted" });
    });
  });
  
  // Other test cases for other controllers can be added similarly

  // Reset mocks after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

