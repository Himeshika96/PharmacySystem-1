const mongoose = require("mongoose");
var schema = mongoose.Schema;

var Drug = new schema({
  Id: {
    type: String,
    required: true
  },
  Brand_name: {
    type: String,
    required: true
  },
  Supplier: {
    type: String,
    required: true
  }
});

var Batch = new schema({
  Drug: {
    type: String,
    required: true
  },
  Exp: {
    type: String,
    required: true
  },
  Md: {
    type: String,
    required: true
  },
  Qty: {
    type: String,
    required: true
  }
});

var Order = new schema({
  Order_Id: {
    type: String,
    required: true
  },
  Drug_name: {
    type: String,
    required: true
  },
  Quanity: {
    type: String,
    required: true
  },
  Supplier: {
    type: String,
    required: true
  }
});

var Employee = new schema({
  Emp_Id: {
    type: String,
    required: true
  },
  Emp_name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  }
});

var Employee_salary = new schema({
  Emp_Id: {
    type: String,
    required: true
  },
  Emp_name: {
    type: String,
    required: true
  },
  Salary: {
    type: String,
    required: true
  }
});

var Employee_duty = new schema({
  Duty_Id: {
    type: String,
    required: true
  },
  Emp_Id: {
    type: String,
    required: true
  },
  Date: {
    type: String,
    required: true
  },
  Time: {
    type: String,
    required: true
  }
});

var Prescription_data = new schema({
  Pid: {
    type: String,
    required: true
  },
  Patient_name: {
    type: String,
    required: true
  },
  Pres_Id: {
    type: String,
    required: true
  },
  Create_Date: {
    type: String,
    required: true
  },
  Dosage: {
    type: String,
    required: true
  },
  Frequency: {
    type: String,
    required: true
  },
  Period: {
    type: String,
    required: true
  }
});

var Issue_data = new schema({
  Pres_Id: {
    type: String,
    required: true
  },
  Drug_name: {
    type: String,
    required: true
  },
  Issue_Date: {
    type: String,
    required: true
  },
  Quantity: {
    type: String,
    required: true
  },
  unit_price: {
    type: String,
    required: true
  }
});

mongoose.model("drugs", Drug);
mongoose.model("batch", Batch);
mongoose.model("order", Order);
mongoose.model("employee", Employee);
mongoose.model("duty", Employee_duty);
mongoose.model("emp_salary", Employee_salary);
mongoose.model("pres_data", Prescription_data);
mongoose.model("issue_data", Issue_data);

mongoose.connect(
  "mongodb://127.0.0.1:27017/pharmacy",
  function(err) {
    if (err) {
      console.log(err);
      process.exit(-1);
    }
    console.log("connected to db");
  }
);

module.exports = mongoose;
