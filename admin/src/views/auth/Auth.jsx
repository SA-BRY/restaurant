// import React from "react";

// @components
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import FoodImage from '../../assets/food_1.jpg';
// @icons

export function CryptoLogin() {
  return (
    <div className="flex flex-col lg:flex-row-reverse h-screen">
      
      {/* Image Section */}
      <div className="h-64 lg:h-auto w-full lg:w-2/5">
        <img
          className="w-full h-full object-cover"
          src={FoodImage}
          alt="Food"
        />
      </div>

      {/* Card Section */}
      <div className="flex justify-center items-center w-full lg:w-3/5">
        <Card className="w-full max-w-lg p-8 lg:p-14 border border-orange-300 shadow-md">
          <CardHeader shadow={false} floated={false} className="text-center">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-4 text-3xl lg:text-4xl"
            >
              Login
            </Typography>
          </CardHeader>
          <CardBody>
            <form action="#" className="flex flex-col gap-4 mt-8">
              <div>
                <label htmlFor="email">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="block font-medium mb-2"
                  >
                    Your Email
                  </Typography>
                </label>
                <Input
                  id="email"
                  color="gray"
                  size="lg"
                  type="email"
                  name="email"
                  placeholder="name@mail.com"
                  className="w-full placeholder-opacity-100 focus:border-t-primary border-t-blue-gray-200"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <label htmlFor="email">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="block font-medium mb-2"
                  >
                    Your Password
                  </Typography>
                </label>
                <Input
                  id="password"
                  color="gray"
                  size="lg"
                  type="password"
                  name="password"
                  placeholder="********"
                  className="w-full placeholder-opacity-100 focus:border-t-primary border-t-blue-gray-200"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <Button size="lg" color="orange" fullWidth>
                Continue
              </Button>
             
            
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default CryptoLogin;
