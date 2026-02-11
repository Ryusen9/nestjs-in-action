import { PropertyService } from './property.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  ParseIntPipe,
  Patch,
  Query,
  // Param,
  // Patch,
  Post,
  // Param,
  // ParseBoolPipe,
  // ParseIntPipe,
  // Patch,
  // Post,
  // Query,
  // UsePipes,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
// import { CreatePropertyDto } from './dto/createProperty.dto';
// import { idParamDto } from './dto/idParam.dto';
// import { ParseIdPipe } from './pipes/parseIdPipe';
// import { zodValidationPipe } from './pipes/zodValidationPipe';
// import { createPropertySchema } from './dto/createPropertyZod.dto';
// import type { CreatePropertyZodDto } from './dto/createPropertyZod.dto';
// import { ParseIdPipe } from './pipes/parseIdPipe';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDto } from './dto/pagination.dto';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.propertyService.findAll(paginationDto);
  }
  //   Params can be added to the route to handle specific property retrieval, for example:
  //   @Get(':id')
  //   findOne(@Param('id') id: string) {
  //     return `Return property with id ${id}`;
  //   }
  // @Get(':id')
  // we can use pipes to change the type of the param, as example:
  // we can add query inside the function and directly manipulate it from inside the function, as example:
  // findOne(
  //   @Param('id', ParseIntPipe) id: idParamDto,
  //   @Query('sort', ParseBoolPipe) sort: boolean,
  // ) {
  // console.log(sort); // it will return true or false, depending on the value of the sort query parameter, if we pass ?sort=true it will return true, if we pass ?sort=false
  // console.log(typeof id); // it will return string, even if we pass a number in the URL, because all params are treated as strings by default to change it to number we can use parseInt() function, as example:
  // const idNumber = parseInt(id, 10); or wrap it to Number() function, as example: const idNumber = Number(id);
  // console.log(typeof Number(id)); // it will return number
  // return `Return property with id ${id}`;
  // }

  // @Patch(':id')
  // update(@Param('id', ParseIdPipe) id, @Body() body: CreatePropertyZodDto) {
  //   return body;
  // }

  // we can have multiple params as well, as example:
  // @Get(':id/:name')
  // findOne(@Param('id') id: string, @Param('name') name: string) {
  //   return `Return property with id ${id} and name ${name}`;
  // }
  // @Get(':id/:name')
  // findOneByIdAndName(@Param('id') id: string, @Param('name') name: string) {
  //   return `Return property with id ${id} and name ${name}`;
  // }

  // if we don't define params in the route, we can still access them using @Param() decorator, which will return an object containing all params:
  // @Get(':id/:mail')
  // findOne(@Param() id: string) {
  //   return id;
  // }
  // it returns:
  // {
  // "id": "12",
  // "mail": "asratul02@gmail.com"
  // }
  // @Get(':id/:mail')
  // findOneByParams(@Param() id: string) {
  //   return id;
  // }
  // Creating a new property using POST method
  // we can create a new property using @Post() decorator, as example:
  // @Post()
  // create() {
  //   return 'Create a new property';
  // }

  // we can access to body of the request using @Body() decorator, as example:
  // @Post()
  // create(@Body() createPropertyDto: CreatePropertyDto) {
  //   return 'Create a new property';
  // }

  // we can access specific fields from the body using destructuring, as example:
  // @Post()
  // create(@Body('name') name: string ) {
  //   return name;
  // }
  // we can change HTTP endpoint to accept more fields from the body, as example:
  // @Post()
  // @HttpCode(202 or anything else)
  // create(@Body('name') name: string, @Body('price') price: number ) {
  //   return `Property created with name: ${name} and price: ${price}`;
  // }
  // @Post()
  // // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  // @UsePipes(new zodValidationPipe(createPropertySchema))
  // create(
  // @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  //   body: CreatePropertyZodDto,
  // ) {
  //   return body;
  // }
  // @Patch(':id')
  // update(
  //   @Param('id', ParseIdPipe) id,
  //   @Body()
  //   body: CreatePropertyDto,
  //   @Headers('host') header,
  // ) {
  //   return header;
  // }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.propertyService.findOne(id);
  }
  @Post()
  create(@Body() dto: CreatePropertyDto) {
    return this.propertyService.create(dto);
  }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id, @Body() dto: UpdatePropertyDto) {
    return this.propertyService.update(id, dto);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id) {
    return this.propertyService.delete(id);
  }
}
