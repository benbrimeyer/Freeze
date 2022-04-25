--[=[
	Returns the maximum value in this list.
	If any values are comparatively equivalent, the first one found will be returned.

	The `comparator` is used in the same way as `table.sort`. If it is not provided, the default comparator is `>`.

	```lua
	List.new({ 10, 200, 30 }).max()
	-- 200

	List.new({ child, teen, adult }).max(function(personA, personB)
		return personA.age > personB.age
	end)
	-- adult
	```

	@within List
	@function max
	@param comparator ((Value, Value) -> (boolean))?
	@return Value
]=]

return require(script.Parent.Parent.Collection.max)
