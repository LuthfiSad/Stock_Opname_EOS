import { MESSAGE_CODE } from "../../utils/MessageCode";
import { MESSAGES } from "../../utils/Messages";
import { ErrorApp } from "../../utils/ResponseMapper";
import { InventoryResponseBodyDTO } from "./inventoriesTypes"; // Ubah import sesuai dengan interface yang sudah diperbarui

export const createInventoryValidate = async ({
  itemName,
  unit,
  damagedQuantity,
  goodQuantity,
  quantity,
  information,
  notes,
}: InventoryResponseBodyDTO) => {
  if (!itemName) {
    return new ErrorApp(
      MESSAGES.ERROR.REQUIRED.ITEM_NAME,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }

  if (typeof itemName !== "string") {
    return new ErrorApp(
      MESSAGES.ERROR.INVALID.ITEM_NAME,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }

  if (!unit) {
    return new ErrorApp(
      MESSAGES.ERROR.REQUIRED.UNIT,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }

  if (typeof unit !== "string") {
    return new ErrorApp(
      MESSAGES.ERROR.INVALID.UNIT,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }

  if (!quantity) {
    return new ErrorApp(
      MESSAGES.ERROR.REQUIRED.QUANTITY,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }

  const quantityNumber = Number(quantity);
  if (isNaN(quantityNumber)) {
    return new ErrorApp(
      MESSAGES.ERROR.INVALID.QUANTITY,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }

  if (!damagedQuantity) {
    return new ErrorApp(
      MESSAGES.ERROR.REQUIRED.DAMAGE_QUANTITY,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }

  const damagedQuantityNumber = Number(damagedQuantity);
  if (isNaN(damagedQuantityNumber)) {
    return new ErrorApp(
      MESSAGES.ERROR.INVALID.DAMAGE_QUANTITY,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }

  if (!goodQuantity) {
    return new ErrorApp(
      MESSAGES.ERROR.REQUIRED.GOOD_QUANTITY,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }

  const goodQuantityNumber = Number(goodQuantity);
  if (isNaN(goodQuantityNumber)) {
    return new ErrorApp(
      MESSAGES.ERROR.INVALID.GOOD_QUANTITY,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }

  if (information && typeof information !== "string") {
    return new ErrorApp(
      MESSAGES.ERROR.INVALID.INFORMATION,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }

  if (notes && typeof notes !== "string") {
    return new ErrorApp(
      MESSAGES.ERROR.INVALID.NOTES,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }
};

export const updateInventoryValidate = async ({
  itemName,
  unit,
  damagedQuantity,
  goodQuantity,
  quantity,
  information,
  notes,
}: InventoryResponseBodyDTO) => {
  if (itemName && typeof itemName !== "string") {
    return new ErrorApp(
      MESSAGES.ERROR.INVALID.ITEM_NAME,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }

  if (unit && typeof unit !== "string") {
    return new ErrorApp(
      MESSAGES.ERROR.INVALID.UNIT,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }

  if (quantity) {
    const quantityNumber = Number(quantity);
    if (isNaN(quantityNumber)) {
      return new ErrorApp(
        MESSAGES.ERROR.INVALID.QUANTITY,
        400,
        MESSAGE_CODE.BAD_REQUEST
      );
    }
  }

  if (damagedQuantity) {
    const damagedQuantityNumber = Number(damagedQuantity);
    if (isNaN(damagedQuantityNumber)) {
      return new ErrorApp(
        MESSAGES.ERROR.INVALID.DAMAGE_QUANTITY,
        400,
        MESSAGE_CODE.BAD_REQUEST
      );
    }
  }

  if (goodQuantity) {
    const goodQuantityNumber = Number(goodQuantity);
    if (isNaN(goodQuantityNumber)) {
      return new ErrorApp(
        MESSAGES.ERROR.INVALID.GOOD_QUANTITY,
        400,
        MESSAGE_CODE.BAD_REQUEST
      );
    }
  }

  if (information && typeof information !== "string") {
    return new ErrorApp(
      MESSAGES.ERROR.INVALID.INFORMATION,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }

  if (notes && typeof notes !== "string") {
    return new ErrorApp(
      MESSAGES.ERROR.INVALID.NOTES,
      400,
      MESSAGE_CODE.BAD_REQUEST
    );
  }
};